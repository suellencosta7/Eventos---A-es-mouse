 <script>
          
        var acao = document.getElementById("mouse")
        

        function entrar(){
            acao.innerHTML="Mouse Entrou"
            acao.style.background='#FB73A3'
        }

        function sair (){
            acao.innerHTML= 'Mouse saiu'  
            acao.style.background= "#127369"
        }
        
        function clicar(){
            acao.innerHTML= 'Você clicou'
            acao.style.background='#8aa6a3'
        } 

        function rolar (){
            acao.innerHTML= "Scroll moveu-se"
            acao.background= "#015958"
        }

        function arrastar (){
            acao.innerHTML='Você  arrastou'
            acao.style.background='--cor3'
        }  

        function arrasto (){
            acao.innerHTML='Você soultou a caixa'
            acao.style.background='blue' 
        }

        function dois (){
            acao.innerHTML='Clique duplo' 
            acao.style.background= '#E37A85'
        }
 
    </script>
