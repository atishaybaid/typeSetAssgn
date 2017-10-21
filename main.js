 (function(){
        function attachEventListener(){
            document.getElementById('msg-field').addEventListener("keydown",handleKeydown);
        }
        function handleKeydown(event){
            var value = event.target.value;
            if(event.keyCode === 13){
               displayMsg(value);
               event.target.value='';
            }

        }

        function displayMsg(value){
            
            var ele = document.createElement('li');
            var eleHtml = '<span class="msg">' +emojify.process(value)+ '<span>'
             
            ele.innerHTML = eleHtml;

            document.getElementsByClassName('messagelist')[0].append(ele);
            
        }

        
        function init(){
            attachEventListener();
        }

        init();
    }())