console.log('App initialization succesful!', this);

// $(document).ready(function(){
//   Handlebars.registerHelper('json', function(context) {
//     return JSON.stringify(context);
//   });
//   $.getJSON('./data.json',
//     function (data) {
//       window.docData = data;
//       let template = $('#occ').html();
//       // Compile the template data into a function
//       let templateScript = Handlebars.compile(template);

//       data.jobs.forEach(job => {
//         // console.log(`!!! ${this.constructor.name}.job:`, job);
//         let html = templateScript(job);
//         $('#occ-output').append(html);
//       });
//   });
// });
