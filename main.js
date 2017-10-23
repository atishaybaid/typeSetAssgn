 (function(){
        function attachEventListener(){
            document.getElementById('msg-field').addEventListener("keydown",handleKeydown);
        }
        function handleKeydown(event){
            //console.log(event);   
            var value = this.innerHTML;
            this.innerHTML = emojify.process(value);
            placeCaretAtEnd(this);
            if(event.keyCode === 13){
               displayMsg(value);
               this.innerHTML = '';
            }

        }


        

        function displayMsg(value){
            
            var ele = document.createElement('li');
            var eleHtml = '<span class="msg">' +emojify.process(value)+ '<span>';
             
            ele.innerHTML = eleHtml;

            document.getElementsByClassName('messagelist')[0].append(ele);
            
        }

        //used to place cursor at the end
        function placeCaretAtEnd(el) {
            el.focus();
            if (typeof window.getSelection != "undefined"
                    && typeof document.createRange != "undefined") {
                var range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (typeof document.body.createTextRange != "undefined") {
                var textRange = document.body.createTextRange();
                textRange.moveToElementText(el);
                textRange.collapse(false);
                textRange.select();
            }

        }

        
        function init(){
            attachEventListener();
        }

        init();
    }())