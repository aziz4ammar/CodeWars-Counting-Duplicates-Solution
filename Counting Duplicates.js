function duplicateCount(text) {
    // Convert the text to lowercase to ignore case sensitivity
    const lowercaseText = text.toLowerCase();
    
    // Create an object to store the count of each character
    const charCount = {};
    
    // Iterate over each character in the text
    for (let i = 0; i < lowercaseText.length; i++) {
      const char = lowercaseText[i];
      
      // If the character is a letter or digit
      if (char.match(/[a-z0-9]/)) {
        // Increment the count for the character
        charCount[char] = (charCount[char] || 0) + 1;
      }
    }
    
    // Count the number of characters with count greater than 1
    let duplicates = 0;
    for (const char in charCount) {
      if (charCount[char] > 1) {
        duplicates++;
      }
    }
    
    return duplicates;
  }
  