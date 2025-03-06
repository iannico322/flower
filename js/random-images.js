/**
 * Random Birthday Images
 * This script adds random birthday-themed images that appear and fade out
 */

document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const config = {
      // List of birthday-themed image paths
      // You'll need to add these images to your project
      imagePaths: [
        'images/nideliza.jpg',
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        'images/image5.jpg',
        'images/image6.jpg',
        'images/image7.jpg',
        'images/image8.jpg',
        'images/image9.jpg',
        'images/image10.jpg',
        'images/image11.jpg',
        'images/image12.jpg',
        'images/image13.jpg',
        'images/image14.jpg',
        'images/image15.jpg',
        'images/image16.jpg',
        'images/image17.jpg',
        'images/image18.jpg',
        'images/image19.jpg',
        'images/image20.jpg',
        'images/image21.jpg',
        'images/image22.jpg',
        'images/image23.jpg',
        'images/image24.jpg',
        'images/image25.jpg',
        'images/image26.jpg',
        'images/image27.jpg',
        'images/image28.jpg',
        'images/image29.jpg',
      ],
      // If you don't have these images, we'll use emoji placeholders
      useEmojiBackup: false,
      // Birthday emojis to use as fallbacks
      birthdayEmojis: ['🎂', '🎁', '🎈', '🎉', '🎊', '🧁', '🍰', '🥳', '🍬', '🍭'],
      // How often a new image appears (in milliseconds)
      frequency: 3000,
      // Total duration the animation runs (in milliseconds, 0 for unlimited)
      duration: 0,
      // Maximum number of images on screen at once
      maxImagesOnScreen: 5,
      // Size range for images (as percentage of original size)
      minSize: 180,
      maxSize: 280
    };
  
    // Container element
    const container = document.querySelector('.random-images-container');
    let activeImages = 0;
    let running = true;
    
    // Check if we need to create the images directory structure
    console.log("Note: You need to create an 'images/birthday' folder with relevant birthday images, or emojis will be used as fallbacks.");
    
    // Function to generate random position
    function getRandomPosition(elementWidth, elementHeight) {
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Calculate maximum positions to ensure image stays completely within viewport
        // Adding padding of 20px from edges
        const maxX = viewportWidth - elementWidth - 20;
        const maxY = viewportHeight - elementHeight - 20;
        
        // Ensure positions are at least 20px from the edge
        const minX = 20;
        const minY = 20;
        
        // Generate random positions within safe boundaries
        return {
          x: Math.max(minX, Math.min(Math.random() * maxX, maxX)),
          y: Math.max(minY, Math.min(Math.random() * maxY, maxY))
        };
      }
    
    // Function to create and animate a random image
    function createRandomImage() {
        if (!running || activeImages >= config.maxImagesOnScreen) return;
        
        activeImages++;
        const randomRotation = Math.random() * 40 - 20; // -20 to +20 degrees
        const randomSize = Math.random() * (config.maxSize - config.minSize) + config.minSize;
        const randomDuration = 4000 + Math.random() * 3000; // 4-7 seconds
        
        // Create the image element first
        const randomImageIndex = Math.floor(Math.random() * config.imagePaths.length);
        const element = document.createElement('img');
        element.className = 'random-image';
        element.src = config.imagePaths[randomImageIndex];
        element.style.width = `${randomSize}px`;
        element.style.height = 'auto';
        
        // Add to container temporarily to get its dimensions
        element.style.opacity = '0';
        container.appendChild(element);
        
        // Once the image is loaded, calculate its position properly
        element.onload = function() {
          // Get actual dimensions (may be different from randomSize due to aspect ratio)
          const elementWidth = element.offsetWidth;
          const elementHeight = element.offsetHeight;
          
          // Get position that ensures element stays within bounds
          const position = getRandomPosition(elementWidth, elementHeight);
          
          // Now set the position and make visible
          element.style.left = `${position.x}px`;
          element.style.top = `${position.y}px`;
          element.style.opacity = ''; // Remove the opacity setting to let animation take over
          
          // Add custom animation duration
          element.style.animationDuration = `${randomDuration}ms`;
          
          console.log('Created image element:', element);
        };
        
        // Remove after animation completes
        element.addEventListener('animationend', () => {
          if (container.contains(element)) {
            container.removeChild(element);
            activeImages--;
          }
        });
      }
    
    // Start creating random images
    const interval = setInterval(createRandomImage, config.frequency);
    
    // Set a limit to the total duration if specified
    if (config.duration > 0) {
      setTimeout(() => {
        clearInterval(interval);
        running = false;
      }, config.duration);
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
      // Clear all current images and reset
      container.innerHTML = '';
      activeImages = 0;
    });
  });