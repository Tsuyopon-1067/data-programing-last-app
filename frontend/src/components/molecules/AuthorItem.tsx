import { Button } from '@mui/material';
import styles from './AuthorItem.module.css';
export const AuthorItem: React.FC<{ name: string, userId: string, url: string, img: string }> = ({ name, userId, url, img }) => {
  return (
    <a href={url}>
      <div className={styles.main}>
        <img className={styles.avatar} src={img} alt="author" />
        <p className={styles.name}>{name}</p>
        <p className={styles.id}>{userId}</p>
        <Button
          variant="contained"
          sx={{
            gridColumn: '3 / 4',
            gridRow: '1 / 3',
            height: '32px',
            width: '90px',
            background: 'black',
            fontWeight: 'bold',
            borderRadius: '16px',
            "&:hover": {
              background: '#272c30',
            },
          }}
        >
          みてみる
        </Button>
      </div>
    </a >
  );
}

