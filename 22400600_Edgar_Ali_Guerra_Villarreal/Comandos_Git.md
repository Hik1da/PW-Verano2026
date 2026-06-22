# Configuracion Basica
### 1. git init
Inicializa un nuevo repositorio Git en la carpeta actual.
```
git init
```

### 2. git clone [url]
Clona un repositorio remoto en la maquina local.  
```
git clone https://github.com/usuario/proyecto.git
```

### 3. git status
Muestra el estado actual del repositorio (archivos modificados, en staging, etc.).  
```
git status
```

### 4. git add [archivo]
Añade un archivo específico al área de preparación (staging).  
```
git add index.html
```
Para añadir todos los archivos modificados al área de preparación se escribe un '.' en el lugar del nombre.
```
git add .
```

# Manejo de historial de commits
### 5. git commit -m "mensaje"
Crea un commit con los cambios preparados y un mensaje descriptivo.  
```
git commit -m "Agregada la página principal"
```
Utilizando la direccion de comando '--amend', se modifica el último commit (mensaje o archivos).
```
git commit --amend -m "Mensaje corregido
```

### 6. git log
Muestra el historial de commits del repositorio.  
```
git log
```

### 7. git diff
Muestra las diferencias entre archivos modificados y el último commit.  
```
git diff
```

### 8. git show [commit]
Muestra detalles de un commit específico.
```
git show a1b2c3d
```

### 9. git blame [archivo]
Muestra quién modificó cada línea de un archivo y en qué commit.
```
git blame index.html
```

### 10. git revert [commit]
Crea un nuevo commit que revierte los cambios de un commit anterior.
```
git revert a1b2c3d
```

### 11. git reset [archivo]
Quita un archivo del área de preparación (staging).
```
git reset index.html
```
Utilizando la direccional de comando '--hard', se restaura el repositorio al estado exacto de un **commit** específico.  
```
git reset --hard a1b2c3d
```

### 12. git stash
Guarda temporalmente cambios sin hacer commit, para recuperarlos después.  
```
git stash
```

### 13. git clean -f
Elimina archivos no rastreados del directorio de trabajo.
```
git clean -f
```

# Configuracion con ramas
### 14. git branch  
Lista todas las ramas del repositorio.  
```
git branch
```
Al añadir un nombre al final del comando, se utiliza para crear una nueva rama con el nombre asignado.  
```
git branch feature-login
```
Si se añade una direccional de comando '-d', se elimina la rama local asignada.  
```
git branch -d feature-login
```

### 15. git checkout [rama]  
Cambia a la rama especificada.  
```
git checkout feature-login
```
Utilizando una direccion de comando '-b', se crea una nueva rama y cambia a ella inmediatamente.  
```
git checkout -b feature-dashboard
```

### 16. git merge [rama] 
Fusiona la rama especificada con la rama actual.  
```
git merge feature-login
```

# Repositorios remotos
### 17. git remote -v
Muestra los repositorios remotos vinculados.  
```
git remote -v
```

### 18. git push origin [rama]
Envía los commits de la rama actual al repositorio remoto.  
```
git push origin main
```

### 19. git pull origin [rama]
Descarga y fusiona los cambios del repositorio remoto.  
```bash
git pull origin main
```

### 20. git fetch
Descarga los cambios del remoto sin fusionarlos automáticamente.  
```bash
git fetch
```
