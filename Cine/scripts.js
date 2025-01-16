 let data = {};

  // Cargar el archivo JSON
  fetch('./cine.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar el archivo JSON');
      }
      return response.json();
    })
    .then(jsonData => {
      data = jsonData; // Asigna los datos cargados a la variable `data`
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });

  function searchMovies() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const results = [];

    // Validar que los datos están cargados
    if (!data.peliculas || !data.cines || !data.sesiones) {
      resultsContainer.innerHTML = '<p>No se pudo cargar la información correctamente.</p>';
      return;
    }

    // Buscar películas
    for (const [movieId, movie] of Object.entries(data.peliculas)) {
      if (movie.titulo.toLowerCase().includes(query)) {
        results.push({
          type: 'Película',
          title: movie.titulo,
          description: movie.sipnosis,
          details: `Director: ${movie.director.join(', ')}\nCines: ${Object.keys(movie.cines).join(', ')}`
        });
      }
    }

    // Buscar cines
    for (const [cinemaId, cinema] of Object.entries(data.cines)) {
      if (cinema.nombre.toLowerCase().includes(query) || cinema.direccion.toLowerCase().includes(query)) {
        results.push({
          type: 'Cine',
          title: cinema.nombre,
          description: cinema.direccion,
          details: `Teléfono: ${cinema.telefono}\nPelículas disponibles: ${Object.keys(cinema.peliculas).join(', ')}`
        });
      }
    }

    // Buscar sesiones
    for (const [sessionId, session] of Object.entries(data.sesiones)) {
      if (session.hora.includes(query)) {
        results.push({
          type: 'Sesión',
          title: `Hora: ${session.hora}`,
          description: `Cines: ${session.cine.join(', ')}`,
          details: `Películas disponibles: ${session.pelicula.join(', ')}`
        });
      }
    }

    // Mostrar resultados
    if (results.length > 0) {
      results.forEach(result => {
        const div = document.createElement('div');
        div.className = 'result';
        div.innerHTML = `<h3>${result.type}: ${result.title}</h3><p>${result.description}</p><pre>${result.details}</pre>`;
        resultsContainer.appendChild(div);
      });
    } else {
      resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
    }
  }
  

