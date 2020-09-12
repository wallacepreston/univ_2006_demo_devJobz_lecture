# univ_2006_project_11_day_01

Demo - Day 03
- Server secrets (.gitignore) 
- Environment Variables (via .env)
  - api key
  - port
- Deploy to Heroku
  - add items (i.e. harvard key or weather key) to .env and .gitignore
  - On command line:

## heroku
- Create a new app `heroku create`
- Create a named app `heroku apps:create <app-name>`
- Push code to heroku `git push heroku master`
- Set an environment variable `heroku config:set VAR_NAME="variable-value"`
- Open the heroku app from the current project `heroku open`






- Premise: Call to Harvard Art API.
  - route for Harvard Art, using a key (NO MODULES)
  - store key in .env
  - ignore it
  - deploy all to heroku
- Mid-class: Optional lecture on function parameters and passing argumennts
- End of class:
  - Preview for Next week: PostgreSQL
