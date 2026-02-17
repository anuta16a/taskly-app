import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getRemoteConfig } from "firebase/remote-config"

const firebaseConfig = {
  apiKey: "AIzaSyBEGQy-OHPyoZgTcK7RZQ4Wgkd8n-ijF4I",
  authDomain: "taskly-cab6c.firebaseapp.com",
  projectId: "taskly-cab6c",
  storageBucket: "taskly-cab6c.firebasestorage.app",
  messagingSenderId: "166053655805",
  appId: "1:166053655805:web:12e28a727480a0be7e7a94",
  measurementId: "G-3M2YFL4RT3"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const remoteConfig = getRemoteConfig(app)

export {
    analytics, 
    remoteConfig,
}