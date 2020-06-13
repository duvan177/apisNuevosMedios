 CREATE DATABASE apirest;

 CREATE TABLE categorias (
     id SERIAL PRIMARY KEY,
     name VARCHAR(45),
     descripcionn VARCHAR(325)
 );
 

 insert into categorias (name, descripcionn) values 
('Matematicas','Las matemáticas o la matemática​ es una ciencia formal que, partiendo de axiomas y siguiendo el razonamiento lógico, 
estudia las propiedades y relaciones entre entidades abstractas como números, figuras geométricas, iconos, glifos, o símbolos en general'),
('Sotware',' programa que permite a los estudiantes mejorar el tiempo que pasan pensando, aprendiendo y estudiando esa información. Estudiar en un
 contexto educativo se refiere al proceso de obtener el domino de una área determinada de conocimiento.'),
 ('Arte','Los adultos necesitan conectarse con otros, desarrollar relaciones satisfactorias, y a través de las artes en un 
 entorno social como en una clase de artes visuales, se puede desarrollar un vínculo especial'),
 ('Fisica' ,'La física es el estudio de los principios básicos que rigen el mundo físico que nos rodea. Empezaremos por el propio movimiento. 
 Luego, aprenderemos sobre las fuerzas, el impulso, la energía y otros conceptos en muchas situaciones físicas diferentes'),
 ('Química','La química es la ciencia que estudia la composición, estructura y propiedades de la materia, incluyendo su relación con la energía y 
 también los cambios que pueden darse en ella a través de las llamadas reacciones.'),
 ('psicologia','La psicología tiene un campo de estudio vasto, ya que se centra en la mente y
  la experiencia humanas, desde diversas perspectivas, corrientes y metodologías.');

   CREATE TABLE temas (
     id SERIAL PRIMARY KEY,
     categoria_id int,
     name VARCHAR(45),
     descripcion VARCHAR(325)
 );



    CREATE TABLE fechas_limite (
     id SERIAL PRIMARY KEY,
     tema_id int,
     fecha_inicio date,
     fecha_fin date
 );