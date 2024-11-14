function skillsMember() {
    var member = {
        name: "John Doe",
        age: 30,
        skills: ["JavaScript", "Python", "Node.js"],
        // Method
        showSkills: function() {
            this.skills.forEach(function(skill) {
                console.log(skill);
            });
        }
    };

    return member;
}