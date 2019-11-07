
  
            var button = document.querySelector('button');
            var copy = document.getElementById('copyEmoji');
            var message = document.getElementById('copied');
            


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


