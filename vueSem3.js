Vue.component("blog-one", {
  template: `
  <div>
  <h1>Let’s Get Solution for Building
  Construction Work</h1>
  <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.

  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
  </div>
  `,
});

Vue.component("blog-two", {
  template: `
  <div>
  <h1>Design sprints are great</h1>
  <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.

  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
  </div>
  `,
});

Vue.component("blog-three", {
  template: `
  <div>
  <h3>{{$parent.newFilterMessage}}</h3>
  </div>
  `,
});

new Vue({
  el: "#app",
  data: {
    listName: ["one", "two", "three"],
    count: 0,
    filterMessage: [
      "Let’s Get Solution for Building Construction Work",
      "Lorem ipsum dolor sit amet, adipiscing кухня 80 Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    ],
    newFilterMessage: "",
  },

  methods: {
    kounter() {
      this.count++;
      FilterM = (arr, query) => {
        return arr.filter(
          (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      };
      if (this.count === 2) {
        this.newFilterMessage = FilterM(this.filterMessage, "кухня").toString();
      }
      if (this.count === 3) {
        return (this.count = 0);
      }
    },
  },

  computed: {
    changeBlock() {
      return `blog-${this.listName[this.count]}`;
    },
  },
});
