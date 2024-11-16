const express = require('express')
const crypto = require("node:crypto");
const base64url = require('base64url');

const { 
    generateRegistrationOptions, 
    verifyRegistrationResponse, 
    generateAuthenticationOptions, 
    verifyAuthenticationResponse 
} = require('@simplewebauthn/server')

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
if (!globalThis.crypto) {
    globalThis.crypto = crypto;
}

const PORT = 3000
const app = express();
app.use(cors(corsOptions))
app.use(express.static('./pc-portal'))
app.use(express.json())

// States



app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`))