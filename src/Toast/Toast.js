import Toast from 'react-bootstrap/Toast';

export const AddFilm = () => {
  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">AllFilms</strong>
      </Toast.Header>
      <Toast.Body>You have add this film to favourites!</Toast.Body>
    </Toast>
  );
}

export const DelFilm = () => {
    return (
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">AllFilms</strong>
        </Toast.Header>
        <Toast.Body>You have remove this film from favourites!</Toast.Body>
      </Toast>
    );
  }
