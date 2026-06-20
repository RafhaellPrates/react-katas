# 🔐 Kata 01 — Medidor de Força de Senha

Avalia uma senha **em tempo real** enquanto o usuário digita, mostrando quais critérios de segurança foram cumpridos e uma classificação geral (Fraca / Média / Forte).

**Treina:** estado que muda ao vivo, renderização condicional, tratamento do estado inicial vazio (o "null" do front) e tomada de decisão por faixas.

---

## Contexto de negócio

Campo de senha numa tela de cadastro. À medida que a pessoa digita, o sistema avalia a senha **em tempo real** e comunica o quão forte ela está, ajudando o usuário a criar uma senha segura **antes** de enviar. Nada é salvo, nada vai pra API — só a avaliação visual ao vivo.

## Requisitos de negócio

1. Um **único campo** onde o usuário digita a senha.
2. A avaliação acontece **enquanto digita**, sem clicar em botão.
3. A senha é avaliada contra **5 critérios**:
   - pelo menos **8 caracteres**;
   - pelo menos **uma letra maiúscula**;
   - pelo menos **uma letra minúscula**;
   - pelo menos **um número**;
   - pelo menos **um caractere especial** (ex.: `!@#$%&*`).
4. Cada critério aparece numa **lista de verificação visível** (cumprido / não cumprido, individual).
5. A senha recebe uma **classificação geral** pela quantidade de critérios cumpridos:
   - **Fraca** — 0 a 2 critérios;
   - **Média** — 3 a 4 critérios;
   - **Forte** — todos os 5.
6. A classificação é exibida claramente e **muda em tempo real**.
7. Um **botão de cadastrar** só fica acionável quando a senha for **"Forte"**; nos demais casos, bloqueado.

## Critérios de aceitação (verificáveis)

**Estado inicial (o "null" do front):**
- [ ] Tela abre com **campo vazio** → nenhuma classificação exibida (ou estado neutro "comece a digitar"); botão **bloqueado**.

**Reação em tempo real:**
- [ ] Campo vazio → ao digitar o **1º caractere**, lista e classificação atualizam **imediatamente**, sem clique.
- [ ] Apagar tudo → tela **volta ao estado inicial** (sem classificação travada).

**Avaliação dos critérios:**
- [ ] Cada um dos 5 critérios reflete corretamente seu estado para qualquer senha.
- [ ] Marcar um critério **não** marca outro por engano (checagens independentes).

**Classificação geral:**
- [ ] 0–2 critérios → **"Fraca"**.
- [ ] 3–4 critérios → **"Média"**.
- [ ] 5 critérios → **"Forte"**.
- [ ] Classificação **acompanha** a digitação, sem atraso em relação ao texto atual.

**Regra do botão:**
- [ ] Botão acionável **somente** quando "Forte".
- [ ] Senha era "Forte" e o usuário apaga parte → botão **volta a bloquear**.

**Casos de borda / dados ausentes:**
- [ ] Campo **vazio** → estado inicial, sem erro, botão bloqueado.
- [ ] Senha **só de espaços** → regra definida e **consistente** (ex.: espaço não conta como especial).
- [ ] Senha **muito longa** (100+ chars) → avalia sem quebrar.
- [ ] Caracteres **acentuados/emoji** (`ç`, `ã`, `🔒`) → não quebra; comportamento consistente.

## Definition of Done

Todos os critérios acima passam num teste manual, com atenção especial ao **campo vazio** e ao **apagar até esvaziar**.
