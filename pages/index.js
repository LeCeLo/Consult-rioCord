import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import React from'react';
import {useRouter} from 'next/router';


function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
      <><Tag>{props.children}</Tag>
        <style jsx>{`
         ${Tag} {
            color: ${appConfig.theme.colors.neutrals['999']};
            fontsize:24;
            weight:600;
          }
    
      `}</style>
    </>
    );
  }
//componente React
//function HomePage() {
  //JSX
  //  return (
    //  <div>
      //  <body>
      //  <GlobalStyle/>
      //  <Titulo tag="h2">Bem Vindos de Volta</Titulo>
      //  <h2>Discord - Alura Matrix</h2>
     //   </body>
     
   // </div>
   // )
  //}
  
  
  //export default HomePage
  export default function PaginaInicial() {
    
    //const username = 'omariosouto';
    const [username, setUsername] = React.useState('');
    const roteamento=useRouter();
    let escreveUsuario;
    if (username.length > 0){
      escreveUsuario = `https://www.github.com/${username}.png`;
    }else{
      escreveUsuario = 'https://cdn-icons-png.flaticon.com/512/4646/4646084.png';
    }
    
   
  
    return (
      <>
       
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.neutrals['300'],
            backgroundImage: appConfig.fundoInicio,
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function(infosDoEvento){
                infosDoEvento.preventDefault();
                roteamento.push(`/chat?username=${username}`)
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Bom dia, fique à vontade!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              
              </Text>
            
  
              <TextField
                fullWidth
                value={username}
                onChange={function(event){
                  //Onde está o valor?
                  const valor = event.target.value;
                  //troca o valor da variável pelo React
                  setUsername(valor);

                }}
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals['050'],
                    mainColor: appConfig.theme.colors.neutrals[999],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["900"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`${escreveUsuario}`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }
  fetch('https://api.github.com/users/lecelo')
    .then(async(respostaDoServidor) =>{
      const respostaEsperada = await respostaDoServidor.json();
      console.log (respostaEsperada);
    })