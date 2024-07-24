const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json()); // middleware (body-parser)   used in post method(createTour)

app.use((req, res, next) => {
  //   console.log('Hello from the middleware');       //own middleware 1
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString(); //own middleware 2
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`)
);

// 2) ROUTE HANDLERS

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    requestTime: req.requestTime, //own middleware 2
    data: {
      tours: tours,
    },
  });
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const updateTour = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here..',
    },
  });
};

const deteteTour = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

const getAllUsers = (req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined!'
    })
}
const createUser = (req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined!'
    })
}
const getUser = (req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined!'
    })
}
const updateUser = (req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined!'
    })
}
const deleteUser = (req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined!'
    })
}

// ROUTES

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deteteTour);

app.route('/api/v1/tours').get(getAllTours).post(createTour);
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deteteTour);
app.route('/api/v1/users').get(getAllUsers).post(createUser);
app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);
const port = 6000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
