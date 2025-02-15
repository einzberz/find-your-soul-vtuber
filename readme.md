# Vtuber Personality Test

A web-based personality quiz that matches users with different versions of the Vtuber character Akizalica based on their preferences and choices.

## Features

- 10 personality-based questions
- Dynamic score calculation
- Responsive design for mobile and desktop
- Progress bar to track quiz completion
- Four different personality type results
- Restart functionality

## Setup Instructions

1. Clone this repository:
```bash
git clone https://github.com/your-username/vtuber-personality-test.git
```

2. Create an `images` folder and add the following images:
- chill-akizalica.png
- energetic-akizalica.png
- mysterious-akizalica.png
- musical-akizalica.png

3. Deploy to GitHub Pages:
- Go to your repository settings
- Navigate to the "Pages" section
- Select the main branch as the source
- Save the changes

Your site will be available at: `https://your-username.github.io/vtuber-personality-test`

## How It Works

The quiz uses a point-based system across four personality categories:
- Chill
- Energetic
- Mysterious
- Musical

Each answer contributes points to different categories. At the end of the quiz, the category with the highest score determines the final personality match.

## Customization

To modify the quiz:
1. Edit `questions.js` to change questions and scoring
2. Update `personalities` object to modify result types
3. Adjust styling in `styles.css`
4. Replace images in the `images` folder

## License

MIT License - feel free to use and modify for your own projects!
