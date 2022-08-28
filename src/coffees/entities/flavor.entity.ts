import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import * as GraphQLTypes from '../../graphql-types';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor implements GraphQLTypes.Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Coffee, (coffee) => coffee.flavors /* inverse side */)
  coffees: GraphQLTypes.Coffee[];
}
