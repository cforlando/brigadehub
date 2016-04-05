var faker = require('faker')

module.exports = [
  {
    'id': 'Test-Empty-Project',
    'brigade': 'codeforexample',
    'status': 'proposed',
    'thumbnailUrl': faker.image.technics(275, 214),
    'bornAt': 'Code for Example',
    'geography': faker.address.city(),
    'politicalEntity': '',
    'type': '',
    'name': 'Test-Empty-Project',
    'description': 'this is an empty repo. WOOO!',
    'license': 'MIT',
    'homepage': 'https://api.github.com/repos/codeforexample/Test-Empty-Project',
    'repository': 'https://api.github.com/repos/codeforexample/Test-Empty-Project',
    'links': [],
    'keywords': [],
    'data': [],
    'partners': [],
    'contact': {
      'name': faker.name.firstName() + ' ' + faker.name.lastName(),
      'email': faker.internet.email()
    },
    'categories': [],
    'needs': []
  },
  {
    'id': 'really-empty-project',
    'brigade': 'codeforexample',
    'status': 'proposed',
    'thumbnailUrl': faker.image.technics(275, 214),
    'bornAt': 'Code for Example',
    'geography': faker.address.city(),
    'politicalEntity': '',
    'type': '',
    'name': 'really-empty-project',
    'description': "this repo doesn't even have a readme! WOOOO!",
    'license': 'MIT',
    'homepage': 'https://api.github.com/repos/codeforexample/really-empty-project',
    'repository': 'https://api.github.com/repos/codeforexample/really-empty-project',
    'links': [],
    'keywords': [],
    'data': [],
    'partners': [],
    'contact': {
      'name': faker.name.firstName() + ' ' + faker.name.lastName(),
      'email': faker.internet.email()
    },
    'categories': [],
    'needs': []
  },
  {
    'id': 'forked-project-kong',
    'brigade': 'codeforexample',
    'status': 'proposed',
    'thumbnailUrl': faker.image.technics(275, 214),
    'bornAt': 'Code for Example',
    'geography': faker.address.city(),
    'politicalEntity': '',
    'type': '',
    'name': 'forked-project-kong',
    'description': ':monkey: Open-source, Microservice & API Management Layer built on top of NGINX',
    'license': 'MIT',
    'homepage': 'https://getkong.org/install',
    'repository': 'https://api.github.com/repos/codeforexample/forked-project-kong',
    'links': [],
    'keywords': [],
    'data': [],
    'partners': [],
    'contact': {
      'name': faker.name.firstName() + ' ' + faker.name.lastName(),
      'email': faker.internet.email()
    },
    'categories': [],
    'needs': []
  },
  {
    'id': 'mirrored-project-hackathon-starter',
    'brigade': 'codeforexample',
    'status': 'proposed',
    'thumbnailUrl': faker.image.technics(275, 214),
    'bornAt': 'Code for Example',
    'geography': faker.address.city(),
    'politicalEntity': '',
    'type': '',
    'name': 'mirrored-project-hackathon-starter',
    'description': 'A new project.',
    'license': 'MIT',
    'homepage': 'https://api.github.com/repos/codeforexample/mirrored-project-hackathon-starter',
    'repository': 'https://api.github.com/repos/codeforexample/mirrored-project-hackathon-starter',
    'links': [],
    'keywords': [],
    'data': [],
    'partners': [],
    'contact': {
      'name': faker.name.firstName() + ' ' + faker.name.lastName(),
      'email': faker.internet.email()
    },
    'categories': [],
    'needs': []
  },
  {
    'id': 'mirrored-project-mirror',
    'brigade': 'codeforexample',
    'status': 'proposed',
    'thumbnailUrl': faker.image.technics(275, 214),
    'bornAt': 'Code for Example',
    'geography': faker.address.city(),
    'politicalEntity': '',
    'type': '',
    'name': 'mirrored-project-mirror',
    'description': 'A new project.',
    'license': 'MIT',
    'homepage': 'https://api.github.com/repos/codeforexample/mirrored-project-mirror',
    'repository': 'https://api.github.com/repos/codeforexample/mirrored-project-mirror',
    'links': [],
    'keywords': [],
    'data': [],
    'partners': [],
    'contact': {
      'name': faker.name.firstName() + ' ' + faker.name.lastName(),
      'email': faker.internet.email()
    },
    'categories': [],
    'needs': []
  }, {
    'id': 'mirrored-project-mirror',
    'brigade': 'codeforexample',
    'status': 'proposed',
    'thumbnailUrl': faker.image.technics(275, 214),
    'bornAt': 'Code for Example',
    'geography': faker.address.city(),
    'politicalEntity': '',
    'type': '',
    'name': 'mirrored-project-mirror',
    'description': 'A new project.',
    'license': 'MIT',
    'homepage': 'https://api.github.com/repos/codeforexample/mirrored-project-mirror',
    'repository': 'https://api.github.com/repos/codeforexample/mirrored-project-mirror',
    'links': [],
    'keywords': [],
    'data': [],
    'partners': [],
    'contact': {
      'name': faker.name.firstName() + ' ' + faker.name.lastName(),
      'email': faker.internet.email()
    },
    'categories': [],
    'needs': []
  }
]
