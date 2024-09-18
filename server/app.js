import express from 'express';
import conectDb from './db.js';
import cors from 'cors'
 
const app = express();
app.use(cors());
const conexao = await conectDb()
 
conexao.on('error', (erro) => {
    console.log('Erro ao conectar', erro)
});
 
conexao.once('open', () => {
    console.log('Conectando no MongoDB')
})
 
app.listen(3000, () => {
    console.log('Servidor Rodando')
});