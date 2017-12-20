//Root1
  new Vue({
    el:'#root1',
    data:{ message:'fuck you'}
  });

//Root2
  let rt = new Vue({ //can be reference from global scope console
    el: '#root2',
    data: {
      newName:'',
      names: ["Kevin", "Ted", "Jack", "Mindy", "Nubtar"]
    },
    methods:{
      addName(){
        this.names.push(this.newName)
      },
      reName(){
        this.names.pop(this.names);
      }
    }
  });

//Root3
  new Vue({
    el: '#root3'
    
  });

//Root4
  new Vue({
    el: '#root4'

  });

//Root5
  new Vue({
    el: '#root5'

  });

//Root6
  new Vue({
    el: '#root6'

  });

//Root7
  new Vue({
    el: '#root7'

  });

//Root8
  new Vue({
    el: '#root8'

  });

//Root9
  new Vue({
    el: '#root9'

  });

//Root10
  new Vue({
    el: '#root10'

  });



