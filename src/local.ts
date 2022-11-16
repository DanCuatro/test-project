import service from "./index";

// Service Listen
const PORT = process.env.PORT ?? 3000;
service.listen(PORT, () =>
  console.log(
    `Service Dan listening: http://localhost:${PORT}`
  )
);
