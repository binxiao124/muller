# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

members = Member.create(
  [
    {
      name: 'Bob Smith',
      position: 'Research Scientist',
      description: 'Lorem ipsum dolor sit amet, an eos euripidis forensibus
        argumentum, vim ne tation aliquip. Eu eum persius noluisse. Eos id
        numquam aliquam maiestatis. Ut vim posse atomorum gloriatur, an nisl
        utinam virtute vix, at dolore noluisse qui. Primis fabellas sapientem
        ei quo, an mea augue utinam abhorreant, usu eu ipsum dicat meliore.
        Adhuc alterum nonumes et vix.',
    },
    {
      name: 'Tricia Adamson',
      position: 'Assistant',
      description: 'Lorem ipsum dolor sit amet, an eos euripidis forensibus
      argumentum, vim ne tation aliquip. Eu eum persius noluisse. Eos id
      numquam aliquam maiestatis. Ut vim posse atomorum gloriatur, an nisl
      utinam virtute vix, at dolore noluisse qui. Primis fabellas sapientem
      ei quo, an mea augue utinam abhorreant, usu eu ipsum dicat meliore.
      Adhuc alterum nonumes et vix.',
    },
    {
      name: 'Brittany Lu',
      position: 'Chief Scientist',
      description: 'Lorem ipsum dolor sit amet, an eos euripidis forensibus
      argumentum, vim ne tation aliquip. Eu eum persius noluisse. Eos id
      numquam aliquam maiestatis. Ut vim posse atomorum gloriatur, an nisl
      utinam virtute vix, at dolore noluisse qui. Primis fabellas sapientem
      ei quo, an mea augue utinam abhorreant, usu eu ipsum dicat meliore.
      Adhuc alterum nonumes et vix.',
    }
  ]
)
