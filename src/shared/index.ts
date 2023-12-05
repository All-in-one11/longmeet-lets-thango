export const config = {
    logoCount: 5,
    firebaseConfig: {
        
  apiKey: "AIzaSyDvumlFLKCkndSrE9H5nKcL4LjFydnZwhk",
  authDomain: "xtreaming-3c40c.firebaseapp.com",
  projectId: "xtreaming-3c40c",
  storageBucket: "xtreaming-3c40c.appspot.com",
  messagingSenderId: "469002802427",
  appId: "1:469002802427:web:7dc4cddb53b1a42a678c5e",
  measurementId: "G-Y5TCQP4CPY"
    },
    servers: {
        iceServers: [
            {
            urls: ['stun:stun1.l.google.com:19302',
                   'stun:stun2.l.google.com:19302'],
            },
        ],
        iceCandidatePoolSize: 10,
    },
    DEV: "development" === 'development',
}

