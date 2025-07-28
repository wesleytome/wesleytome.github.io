# Funcionalidade de Tema - Claro/Escuro

## 🎨 Funcionalidades Implementadas

### ✅ Toggle de Tema
- **Botão elegante** no canto superior direito do hero
- **Ícones animados**: Sol (modo claro) e Lua (modo escuro)
- **Efeitos visuais**: Hover com gradiente, rotação e escala
- **Transições suaves**: 500ms de duração para todas as animações

### ✅ Persistência
- **localStorage**: Tema salvo automaticamente
- **Preferência do sistema**: Detecta tema do OS na primeira visita
- **Sincronização**: Mantém escolha do usuário entre sessões

### ✅ Notificação Visual
- **Feedback imediato**: Notificação aparece ao trocar tema
- **Design elegante**: Backdrop blur com ícone e texto
- **Auto-hide**: Desaparece após 2 segundos
- **Posicionamento**: Abaixo do botão de toggle

### ✅ Integração Completa
- **Radix UI**: Sincronizado com o sistema de temas
- **CSS Variables**: Todas as cores adaptam automaticamente
- **Componentes**: Todos os elementos respeitam o tema atual

## 🚀 Como Usar

### Para o Usuário
1. **Clique no botão** (canto superior direito)
2. **Veja a notificação** confirmando a mudança
3. **Tema persiste** entre sessões

### Para o Desenvolvedor

#### Contexto de Tema
```tsx
import { useTheme } from './contexts/ThemeContext';

const { theme, toggleTheme, setTheme } = useTheme();
```

#### Hook para Radix UI
```tsx
import { useRadixTheme } from './hooks/useRadixTheme';

// No componente principal
useRadixTheme();
```

#### Hook para Detectar Sistema
```tsx
import { useSystemTheme } from './hooks/useSystemTheme';

// No componente principal
useSystemTheme();
```

## 🎯 Características Técnicas

### Estrutura de Arquivos
```
src/
├── contexts/
│   └── ThemeContext.tsx          # Contexto principal
├── hooks/
│   ├── useRadixTheme.tsx         # Sincronização Radix UI
│   └── useSystemTheme.tsx        # Detecção do sistema
└── components/elements/
    ├── ThemeToggle.tsx           # Botão de toggle
    └── ThemeNotification.tsx     # Notificação visual
```

### CSS Variables
- **Modo Claro**: Cores suaves e profissionais
- **Modo Escuro**: Cores contrastantes e modernas
- **Transições**: Suaves entre os modos

### Acessibilidade
- **ARIA labels**: Descrições para leitores de tela
- **Keyboard navigation**: Suporte completo
- **Contraste**: Adequado em ambos os modos

## 🔧 Personalização

### Cores do Tema
Edite as variáveis CSS em `src/index.css`:
```css
.light {
  --background: hsl(0, 0%, 98%);
  --foreground: hsl(220, 15%, 15%);
  /* ... outras variáveis */
}

.dark {
  --background: hsl(0, 0%, 11%);
  --foreground: hsl(0, 0%, 98%);
  /* ... outras variáveis */
}
```

### Posicionamento do Botão
Modifique em `ThemeToggle.tsx`:
```tsx
<div className="fixed top-6 right-6 z-50">
  {/* Botão aqui */}
</div>
```

### Duração das Animações
Ajuste em `ThemeToggle.tsx`:
```tsx
className="... transition-all duration-500 ..."
```

## 🎨 Design System

### Botão de Toggle
- **Tamanho**: 56px (w-14 h-14)
- **Formato**: Circular com borda
- **Efeitos**: Hover com gradiente e rotação
- **Ícones**: 24px com animação

### Notificação
- **Posição**: Fixa, abaixo do botão
- **Background**: Semi-transparente com blur
- **Duração**: 2 segundos
- **Animação**: Fade in/out

### Cores
- **Primária**: Adapta ao tema
- **Secundária**: Complementar
- **Background**: Contrastante
- **Texto**: Legível em ambos os modos 