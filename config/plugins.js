module.exports = ({ env }) => ({
  // ...
  "io": {
    "enabled": true,
    "config": {
      "IOServerOptions" :{
        "cors": { "origin": "http://localhost:5000", "methods": ["GET"] },
      },
      "contentTypes": {
        
      },
    },
  },
  // ...
});
