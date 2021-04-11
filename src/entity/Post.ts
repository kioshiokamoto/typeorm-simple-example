import { Column, Entity } from 'typeorm';
import Model from './Model';

@Entity('posts')
export class Post extends Model {
	@Column()
	title: string;

	@Column()
	body: string;
}
