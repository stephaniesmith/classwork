import { db } from './firebase';

export const roomsRef = db.ref('rooms');
export const chatsRef = db.ref('chats');