import pygame
import sys

# Inicialização do Pygame
pygame.init()

# Configuração da tela
largura, altura = 800, 600
tela = pygame.display.set_mode((largura, altura))
pygame.display.set_caption("Sistema Solar Educativo")

# Cores
BRANCO = (255, 255, 255)
PRETO = (0, 0, 0)

# Carregar imagens dos planetas
planetas = {
    "Mercúrio": pygame.image.load("mercurio.png"),
    "Vênus": pygame.image.load("venus.png"),
    "Terra": pygame.image.load("terra.png"),
    "Marte": pygame.image.load("marte.png"),
    "Júpiter": pygame.image.load("jupiter.png"),
    "Saturno": pygame.image.load("saturno.png"),
    "Urano": pygame.image.load("urano.png"),
    "Netuno": pygame.image.load("netuno.png")
}

# Posições dos planetas
posicoes = {
    "Mercúrio": (50, 100),
    "Vênus": (150, 100),
    "Terra": (250, 100),
    "Marte": (350, 100),
    "Júpiter": (450, 100),
    "Saturno": (550, 100),
    "Urano": (650, 100),
    "Netuno": (750, 100)
}

# Informações sobre os planetas
informacoes = {
    "Mercúrio": "Mercúrio: O menor planeta do sistema solar.",
    "Vênus": "Vênus: O planeta mais quente.",
    "Terra": "Terra: Nosso planeta natal.",
    "Marte": "Marte: O planeta vermelho.",
    "Júpiter": "Júpiter: O maior planeta.",
    "Saturno": "Saturno: Conhecido por seus anéis.",
    "Urano": "Urano: Tem um eixo de rotação único.",
    "Netuno": "Netuno: O planeta mais distante do Sol."
}

# Função principal do jogo
def jogo():
    rodando = True
    fonte = pygame.font.Font(None, 36)

    while rodando:
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                rodando = False

            if evento.type == pygame.MOUSEBUTTONDOWN:
                x, y = evento.pos
                for planeta, pos in posicoes.items():
                    rect = planetas[planeta].get_rect(topleft=pos)
                    if rect.collidepoint(x, y):
                        print(informacoes[planeta])

        tela.fill(PRETO)
        for planeta, pos in posicoes.items():
            tela.blit(planetas[planeta], pos)

        pygame.display.flip()

    pygame.quit()
    sys.exit()

# Execução do jogo
if __name__ == "__main__":
    jogo()
