import pygame
import sys

pygame.init()

#Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

#Constants for the game
WIDTH, HEIGHT = 500, 500
centerOfMap = (WIDTH/2, HEIGHT/2)
x, y = WIDTH/2, HEIGHT/2

#Rectangle
rectWIDTH = 25
rectHEIGHT = 100

enemyX, enemyY = WIDTH - rectWIDTH, 0

#Circle
circleX, circleY = WIDTH/2, HEIGHT/2
circleSpeedX, circleSpeedY = 5, 5

#Screen
screen = pygame.display.set_mode((WIDTH, HEIGHT))

#=================================================================================

#functions

def playerMovement():
    global playerX, playerY
    playerX, playerY = pygame.mouse.get_pos()

    rectX = max(0, min(playerX, 0))
    rectY = max(0, min(playerY, HEIGHT - rectHEIGHT))

    pygame.draw.rect(screen, WHITE, (rectX, rectY, rectWIDTH, rectHEIGHT))

def ballMovement():

    ballRadius = 10
    global circleX, circleY, circleSpeedX, circleSpeedY

    circleX += circleSpeedX
    circleY += circleSpeedY

    # Boundary checking
    if circleX - ballRadius < 0 or circleX + ballRadius > WIDTH:
        circleSpeedX = -circleSpeedX  # Bounce off left/right edges
    if circleY - ballRadius < 0 or circleY + ballRadius > HEIGHT:
        circleSpeedY = -circleSpeedY  # Bounce off top/bottom edges

    # Collision detection with player
    rectX, rectY = playerX, playerY  # Get the player's rectangle position
    if (circleX - ballRadius < rectX + rectWIDTH and
            circleX + ballRadius > rectX and
            circleY - ballRadius < rectY + rectHEIGHT and
            circleY + ballRadius > rectY):
        circleSpeedY = -circleSpeedY  # Bounce off the player

    # Collision detection with enemy
    enemyRectX, enemyRectY = enemyX, enemyY  # Get the enemy's rectangle position
    if (circleX - ballRadius < enemyRectX + rectWIDTH and
            circleX + ballRadius > enemyRectX and
            circleY - ballRadius < enemyRectY + rectHEIGHT and
            circleY + ballRadius > enemyRectY):
        circleSpeedY = -circleSpeedY  # Bounce off the enemy

    pygame.draw.circle(screen, WHITE, (circleX, circleY), ballRadius)

def enemyMovement():
    global enemyX, enemyY
    enemyX, enemyY = WIDTH - rectWIDTH, 0

    enemyY += circleY
    
    pygame.draw.rect(screen, WHITE, (enemyX, enemyY, rectWIDTH, rectHEIGHT))
    
#=================================================================================

#Game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    screen.fill(BLACK)

    playerMovement()
    ballMovement()
    enemyMovement()

    #Update the display
    pygame.display.flip()
    pygame.time.Clock().tick(60)