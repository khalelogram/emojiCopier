<style>
	.show{
		display: block !important;	
	}
</style>
<button class="btn btn-copy"> Copy this emoji <span> <?php the_field('symbol'); ?> </span>
	<div id="copied" style="display:none">Emoji Copied!</div>
</button>
    <input id="copyEmoji" style="opacity: 0;" type="text" value="<?php the_field('symbol'); ?>"></input>

    <script>
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

        emojiCopier();

    </script>
