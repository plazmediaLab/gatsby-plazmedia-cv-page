# Configurar Tailwind CSS

1. Instalar **tailwind css**.

~~~
  $ npm i taildwindcss --save-dev
~~~

2. Crea tu archivo de configuración de Tailwind.

~~~
  $ npx taildwindcss init
~~~

3. Instalar plugin **postcss** de gatsvy.

~~~
  $ npm i --save gatsby-plugin-postcss
~~~

4. Crear archivo **global.css** en tu **[ src/styles/ ]** y agregar los modulos de tailwind dentro.

~~~
  @tailwind base;

  @tailwind components;

  @tailwind utilities;
~~~

5. En el archivo **gatsby-browser.js** importamos el archivo CSS

~~~
  import "./src/styles/global.css"
~~~

5. Configurar el archivo **postcss.config.js** para realizar el compilado del CSS y agregar la configuración.

~~~
  module.exports = () => ({
    plugins: [require("tailwindcss")],
  })
~~~