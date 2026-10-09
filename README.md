# LABRA UFSC — protótipo Hugo + GitHub Pages

Site estático do Laboratório de Robótica Avançada da UFSC Blumenau, feito com [Hugo](https://gohugo.io/) e [Relearn](https://github.com/McShelby/hugo-theme-relearn).

## O que há no protótipo

- Início, história, equipe, infraestrutura, sete linhas de pesquisa, parcerias, publicações e contato.
- Fotos e imagens do laboratório armazenadas no próprio repositório.
- Busca local do Relearn, menu responsivo e opções de visualização clara/escura.
- GitHub Actions que compila e publica o site em cada envio para `main`.
- Endereços alternativos para algumas páginas, úteis para preservar links já compartilhados.

**Revisões editoriais antes de uso oficial:** confirmar nomes e vínculos da equipe, instituições parceiras, equipamento disponível e direitos de uso das fotos. A seção de publicações está em preparação. O contato é feito por e-mail e redes sociais, pois GitHub Pages hospeda apenas arquivos estáticos.

## Testar no computador

1. Instale [Hugo Extended 0.167.0](https://github.com/gohugoio/hugo/releases/tag/v0.167.0) ou uma versão compatível com o tema (o submódulo atual exige pelo menos 0.166.0).
2. Na pasta do projeto, execute `git submodule update --init --recursive`.
3. Execute `hugo server -D` e abra `http://localhost:1313/`.

O conteúdo é editado em `content/`, a configuração em `hugo.toml`, as fotos em `static/images/` e os ajustes visuais em `static/css/custom.css`. Não edite os arquivos dentro de `themes/hugo-theme-relearn/`; eles pertencem ao submódulo do tema.

O slideshow de infraestrutura usa o shortcode local `{{< slideshow path="images/slideshow" largeText="Equipamentos em imagens" smallText="Conheça as plataformas e instrumentos de pesquisa do LABRA" >}}`. Para acrescentar equipamentos, coloque imagens numeradas em `static/images/slideshow/` e defina título e texto alternativo em `data/slideshow.yaml`. A apresentação avança a cada cinco segundos e pode ser pausada pelo visitante.

## Publicar um teste no GitHub Pages

1. Crie um repositório **vazio** no GitHub, por exemplo `labra-teste`. Não peça ao GitHub para criar README, licença ou `.gitignore`, porque este projeto já tem esses arquivos. Use um repositório público para o teste, a menos que seu plano e suas políticas permitam Pages em um repositório privado.
2. Abra um terminal nesta pasta e execute, substituindo `SEU_USUARIO` e `labra-teste`:

   ```powershell
   git branch -M main
   git add .
   git commit -m "Criar protótipo Hugo do LABRA"
   git remote add origin https://github.com/SEU_USUARIO/labra-teste.git
   git push -u origin main
   ```

3. No GitHub, abra **Settings → Pages** do repositório e escolha **GitHub Actions** em *Build and deployment → Source*.
4. Em **Actions**, acompanhe o workflow **Publicar site Hugo no GitHub Pages**. Se ele não iniciar após a escolha da fonte, execute-o em **Run workflow**.
5. Ao terminar, abra o endereço exibido no job de publicação. Em um repositório de projeto, ele costuma seguir `https://SEU_USUARIO.github.io/labra-teste/`.

O workflow usa a URL que o próprio GitHub Pages fornece ao gerar o site. Assim, os links funcionam em um repositório de projeto com subdiretório, em um repositório `SEU_USUARIO.github.io` ou com domínio personalizado. O `baseURL` de `hugo.toml` é apenas um valor de desenvolvimento e é substituído na publicação.

**Se o repositório já tiver um remote `origin`:** use `git remote set-url origin URL` em vez de `git remote add origin URL`. Se o GitHub disser que `main` não é a branch padrão, escolha `main` em **Settings → Branches** ou adapte o gatilho em `.github/workflows/pages.yml`.

## Domínio institucional depois do teste

Para usar um domínio institucional, configure o DNS com a equipe de TI responsável e informe o endereço em **Custom domain** no GitHub Pages. Confira as orientações de [domínios personalizados do GitHub Pages](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) antes da mudança.

## Como comparar desempenho

Depois da publicação, avalie o site em uma ferramenta como [PageSpeed Insights](https://pagespeed.web.dev/), em celular e desktop. Observe LCP, INP, CLS e o tamanho total transferido. A velocidade percebida deve ser medida no endereço publicado.

## Imagens e conteúdo

As imagens usadas pelo site estão em `static/images/` e são publicadas junto com o projeto. O logo, o guardanapo, o mapa de localização e a foto coletiva foram fornecidos pela equipe para esta versão.
