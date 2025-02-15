import os

# Get the current folder
folder_path = os.getcwd()

# Get all files with .png or .gif extensions
image_files = [f for f in os.listdir(folder_path) if f.endswith(('.png', '.gif'))]

# Print the image names
for image in image_files:
    print(image)
