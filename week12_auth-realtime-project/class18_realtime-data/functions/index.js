const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const gamesRef = admin.database().ref('/games');
const userGamesRef = admin.database().ref('/userGames');

module.exports.makeMatch = functions.database.ref('/queue/{queueId}')
  .onCreate((snapshot, context) => {
    const { user: currentUser } = snapshot.val();
    const queueId = context.params.queueId
    const queueRef = snapshot.ref.parent;

    return queueRef.orderByChild('created').once('value', data => {
      const queue = data.val();
      const match = Object.keys(queue)
        .map(key => ({ id: key, user: queue[key].user }))
        .find(({ user }) => user !== currentUser);

      if(match) {
        const { user, id } = match;
        const newGameRef = gamesRef.push();
        const newGameKey = newGameRef.key;
        return Promise.all([
          newGameRef.set({
            playerX: currentUser,
            playerO: user,
            board: ['','','','','','','','','']
          }),
          userGamesRef.child(currentUser).child(newGameKey).set(true),
          userGamesRef.child(user).child(newGameKey).set(true),
          queueRef.child(queueId).remove(),
          queueRef.child(id).remove()
        ])
      } else {
        console.log('no match');
        return null;
      }
    })
  });