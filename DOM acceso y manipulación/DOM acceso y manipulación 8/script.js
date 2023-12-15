document.addEventListener('DOMContentLoaded', function () {
    const socket = io();
  
    const commentsList = document.getElementById('comments-list');
    const commentInput = document.getElementById('comment-input');
    const commentBtn = document.getElementById('comment-btn');
  
    commentBtn.addEventListener('click', function () {
      const commentText = commentInput.value.trim();
  
      if (commentText !== '') {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.textContent = commentText;
        commentsList.appendChild(comment);
  
        socket.emit('comment', commentText);
  
        commentInput.value = '';
      }
    });
  
    socket.on('comment', function (data) {
      const comment = document.createElement('div');
      comment.classList.add('comment');
      comment.textContent = data;
      commentsList.appendChild(comment);
    });
  });