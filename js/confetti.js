// Confetti animation
document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const confettiCount = 100;
    const confettiColors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#4d908e', '#577590', '#277da1', '#ff99c8', '#fcf6bd'];
    const confettiShapes = ['square', 'circle', 'triangle', 'line'];
    
    // Create confetti container
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);
    
    // Generate confetti
    for (let i = 0; i < confettiCount; i++) {
      createConfetti(confettiContainer, confettiColors, confettiShapes);
    }
    
    // Continuously add new confetti
    setInterval(() => {
      createConfetti(confettiContainer, confettiColors, confettiShapes);
      
      // Remove old confetti to prevent too many elements
      if (confettiContainer.children.length > 200) {
        confettiContainer.removeChild(confettiContainer.children[0]);
      }
    }, 300);
  });
  
  // Function to create a single confetti element
  function createConfetti(container, colors, shapes) {
    const confetti = document.createElement('div');
    const size = Math.floor(Math.random() * 10) + 5; // 5-15px
    
    // Random confetti properties
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const left = Math.floor(Math.random() * 100);
    const animationTypes = ['confetti--animation-slow', 'confetti--animation-medium', 'confetti--animation-fast'];
    const animationType = animationTypes[Math.floor(Math.random() * animationTypes.length)];
    
    // Set confetti styles
    confetti.className = `confetti ${animationType}`;
    confetti.style.backgroundColor = color;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.left = `${left}%`;
    confetti.style.opacity = Math.random() + 0.1;
    
    // Apply different shapes
    switch (shape) {
      case 'circle':
        confetti.style.borderRadius = '50%';
        break;
      case 'triangle':
        confetti.style.width = '0';
        confetti.style.height = '0';
        confetti.style.backgroundColor = 'transparent';
        confetti.style.borderLeft = `${size/2}px solid transparent`;
        confetti.style.borderRight = `${size/2}px solid transparent`;
        confetti.style.borderBottom = `${size}px solid ${color}`;
        break;
      case 'line':
        confetti.style.height = `${size * 2}px`;
        confetti.style.width = `${size/5}px`;
        break;
      default:
        // Square is the default
        break;
    }
    
    // Add to container
    container.appendChild(confetti);
    
    // Remove after animation completes
    setTimeout(() => {
      if (container.contains(confetti)) {
        container.removeChild(confetti);
      }
    }, 6000);
  }

  