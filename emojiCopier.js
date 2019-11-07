
  
            button = document.querySelector('button');
            copy = document.getElementById('copyEmoji');
            message = document.getElementById('copied');
            


        function emojiCopier(){
            button.addEventListener('click', function(){
                copy.select();
                copy.setSelectionRange(0, 99999);
                document.execCommand('copy');
                message.classList.add('show');
                setTimeout(function() { message.classList.remove('show'); }, 1500);
            });
        };

            // removeClass(){
            //     message.removeClass('show');
            // };

        emojiCopier();


