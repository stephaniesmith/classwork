import { db, storage } from './firebase';

export const petRef = db.ref('pet');
export const roomsRef = db.ref('rooms');
export const chatsRef = db.ref('chats');

export const queueRef = db.ref('queue');
export const gamesRef = db.ref('games');
export const userGamesRef = db.ref('userGames');

export const imageStorageRef = storage.ref('images');