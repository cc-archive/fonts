const { toMatchImageSnapshot } = require('jest-image-snapshot')

<<<<<<< HEAD
expect.extend({ toMatchImageSnapshot })
=======
expect.extend({ toMatchImageSnapshot })

jest.setTimeout(30000) // The processes can be incredibly slow in containers
>>>>>>> origin/master
