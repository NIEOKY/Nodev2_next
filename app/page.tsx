import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Start from './components/Start';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Start />
    </div>
  );
}
