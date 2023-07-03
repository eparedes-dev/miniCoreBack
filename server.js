const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.set('port',process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(router);

app.listen(app.get('port'), () => console.log('Servidor Corriendo en: ',app.get('port')));