

            // pilha
            tamanhototal = 100;
            
            topo = 0;
            
            var numeros = [tamanhototal];

            // Resultado
            divRes = document.getElementById("res");

            //Operadores
            operadores = {
                somar: "+",
                subtrair: "-",
                dividir: "/",
                multiplicar: "*",
                modulo: "%",
                decimal: ".",
                abrir: "(",
                fechar: ")"
            }

            // funções
            function digitado(){

                divRes.addEventListener("keypress", (el) =>{
                    const keyPressed = (el.keyCode ? el.keyCode : el.wich);
                    
                    if(keyPressed < 47 || keyPressed > 58){
                        el.preventDefault();
                    } else{
                        el.preventDefault();
                        pilha(el.key, numeros);
                    }
                })
            }digitado();

            function clicado(num){
                pilha(num, numeros);
            }

            function pilha(num, p1){

                    if(topo < tamanhototal){
                    p1[topo] = num;
                    divRes.value += "" + p1[topo];
                    topo++;
                    }else{
                    alert("Está cheio.");
                    topo = tamanhototal;
                    }
            }

            function armazenarValor() {
                val1 = divRes.value;
                return val1;
            }

            function ce(){
                    topo--;
                    if(topo > 0){
                    numeros.splice(topo, 1);
                    divRes.value = divRes.value.replace(/.$/, '');
                    }else{
                    topo = 0;
                    clearAll();
                    }
            }
    
            function clearAll(){
                    divRes.value = "";
                    while(numeros.length) {
                    numeros.pop();
                    }
            }

            function resultado(){
                result = divRes.value;
                if (result){
                    divRes.value = eval(result);
                }
            }

            function operacoes(n){
            divRes.value += operadores[n];
            }