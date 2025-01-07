#!/bin/bash
# Carregar variáveis do .env
export $(grep -v '^#' .env | xargs)

# Enviar o token como secret para o repositório do GitHub
gh secret set PERSONAL_ACCESS_TOKEN --body "$PERSONAL_ACCESS_TOKEN"
