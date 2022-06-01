<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=fe, initial-scale=1.0">
    <link rel="stylesheet" href="divEvents.css">

    <title>Eventos mouser</title>
</head>
<body> 

    <main>

        <h1>Eventos Mouser</h1>  

         <div id="mouse" onmouseover="entrar()" onmouseleave="sair()" onclick="clicar()" onwheel="rolar()" ondrag="arrastar()" draggable="true"  ondragend="arrasto()" ondblclick="dois()">Faça uma ação</div>

    </main>

   

    <script>

        var acao = document.getElementById("mouse")
        

        function entrar(){
            acao.innerHTML="Mouse Entrou" 
            acao.style.background= '#A65656'

        
        }

        function sair (){
            acao.innerHTML= 'Mouse saiu'  
            acao.style.background= "#D97E96"
        }
        
        function clicar(){
            acao.innerHTML= 'Você clicou'
            acao.style.background='#E20497'
        } 

        function rolar (){
            acao.innerHTML= "Scroll moveu-se"
            acao.background= "#F29B9B"
        }

        function arrastar (){
            acao.innerHTML='Você  arrastou'
            acao.style.background='--cor3'
        }  

        function arrasto (){
            acao.innerHTML='Você soultou a caixa'
            acao.style.background='#8C5679' 
        }

        function dois (){
            acao.innerHTML='Clique duplo' 
            acao.style.background= '#F29B9B'
        }     

    </script>
    
</body>
</html>
