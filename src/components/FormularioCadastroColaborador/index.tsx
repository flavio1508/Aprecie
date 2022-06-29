import { Margin, MediationOutlined, SaveOutlined } from '@mui/icons-material';
import { Button, Grid, imageListClasses, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { link } from 'fs';
import React, { useState } from 'react';
import IColaborador from '../../types/IColaborador';


const data = {
  colaboradores:[] as IColaborador[]
};
interface Props{
    token: any
}

export default function FormularioCadastroColaborador({token}: Props) { 
  const [colaborador, setColaborador] = useState<IColaborador>({
    id:1,
    nome: '',
    cpf: '',
    data_de_nascimento:'',
    usuario_id_do_chat: ''
  });
  const cadastrar = (evento:React.FormEvent<HTMLFormElement>) =>{
    evento.preventDefault();
    data.colaboradores.push(colaborador);
    axios.post
    ('http://127.0.0.1:8000/login/colaborador/', 
      JSON.stringify(data), {headers:{
        'Authorization': token.token
      }})
      .then(resposta =>{
        console.log(resposta);
      } )
      .catch(erro => {
        console.log(erro);
      });
  };
  return( 
    <Box sx={{flexGrow:1}}>
      <h2>Cadastro de Colaboradores</h2>
      <form onSubmit={cadastrar} method="POST"> 
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField 
              focused
              color="secondary"
              required 
              fullWidth 
              id="nome" 
              label="Nome completo" 
              value={colaborador.nome}
              onChange={evento => setColaborador({
                ...colaborador, nome: evento.target.value
              })}>
            </TextField>
          </Grid>

          <Grid item xs={4}>
            <TextField 
              focused
              color="secondary"
              required 
              fullWidth
              id="cpf" 
              label="CPF"
              value={colaborador.cpf}
              onChange={evento => setColaborador({
                ...colaborador, cpf: evento.target.value
              })}>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField 
              focused
              color="secondary"
              required 
              fullWidth
              id="data_de_nascimento" 
              label="Data de nascimento" 
              type="date"
              value={colaborador.data_de_nascimento}
              onChange={evento => setColaborador({
                ...colaborador, data_de_nascimento: evento.target.value
              })}>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField 
              focused
              color="secondary"
              required 
              fullWidth
              id="usuario_id_do_chat" 
              label="ID do chat"
              value={colaborador.usuario_id_do_chat}
              onChange={evento => setColaborador({
                ...colaborador, usuario_id_do_chat: evento.target.value
              })}>
            </TextField > 
          </Grid>
          <Grid item sx={{margin: 1}}> 
            <Button color="secondary" 
              variant="contained" 
              type="submit" 
              endIcon={<SaveOutlined/>}> Cadastrar </Button>
          </Grid>
        </Grid>
      </form>
            
    </Box>
  );

}