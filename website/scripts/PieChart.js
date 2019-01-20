
class DotMap {

    constructor(grades) {
        this.tittle ={
            text: "Student Grade"
        };
        this.grades = grades;
        this.gradeStats = {"a":0,"b":0,"c":0,"d":0,"f":0,"total":0}
        for(let grade of grades) {
            if(+grade>=90)
                this.gradeStats["a"]++;
            else if(+grade>=80)
                this.gradeStats["b"]++;
            else if(+grade>=70)
                this.gradeStats["c"]++;
            else if(+grade>=60)
                this.gradeStats["d"]++;
            else
                this.gradeStats["f"]++;
            this.gradeStats["total"]++;
            console.log(this.gradeStats["total"]);
        }
        this.calculate();
        this.createCanvas();
    }
    createCanvas() {
        this.canvas = new CanvasJS.Chart("chartContainer2", {
            animationEnabled: true,
            zoomEnabled: true,
            title: this.tittle,
            exportEnabled: true,
            animationEnabled: true,

            legend:{
                cursor: "pointer"
            },
            data: [{
                type: "pie",
                showInLegend: true,
                toolTipContent: "{name}: <strong>{y}%</strong>",
                indexLabel: "{name} - {y}%",
                dataPoints: this.dataPoint
            }]
        });
    }
    display() {

        this.canvas.render();
    }
    calculate() {
        this.dataPoint = [{y:this.gradeStats["a"]/this.gradeStats["total"]*100, name: "90%-100%", exploded: true},
            {y:this.gradeStats["b"]/this.gradeStats["total"]*100, name: "80%-90%", exploded: true},
            {y:this.gradeStats["c"]/this.gradeStats["total"]*100, name: "70%-80%", exploded: true},
            {y:this.gradeStats["d"]/this.gradeStats["total"]*100, name: "60%-70%", exploded: true},
            {y:this.gradeStats["f"]/this.gradeStats["total"]*100, name: "0%-60%", exploded: true}];
    }
    updateWithNewData(grade) {
        if (+grade >= 90)
            this.gradeStats["a"]++;
        else if (+grade >= 80)
            this.gradeStats["b"]++;
        else if (+grade >= 70)
            this.gradeStats["c"]++;
        else if (+grade >= 60)
            this.gradeStats["d"]++;
        else
            this.gradeStats["f"]++;
        this.gradeStats["total"]++;
        this.calculate();
        this.canvas.options.data[0].dataPoints = this.dataPoint;
        this.display();
        document.getElementById("surveyOpp").innerHTML =  'Thanks for taking the survey! You ve got 1000 points!';
    }
}
function adjust_textarea(h) {
  h.style.height = "20px";
  h.style.height = (h.scrollHeight)+"px";
}
function popup() {
  let node = document.getElementById("popForm");
  if(node.style.display!='block') {
    node.style.display='block';
  }
  else {
    node.style.display='none';
  }
}
function afSubmit() {
  let node = document.getElementById("grade");
  g_chart.updateWithNewData(node.value);
  document.getElementById("popForm").style.display='none';
  submit();
  //= 'Thanks for taking the survey! You ve got 1000 points!';
}
g_chart=0;
        let dataset = [];
        for(i in grades){
            //console.log(lines[line].split(',')[0]+" ",lines[line].split(',')[1]);
            dataset.push(grades[i]["Grade"]);
            console.log(grades[i]["Grade"]);
            // dataset.push({x:line,y:line+1})
        }
        let chart = new DotMap(dataset);
        g_chart = chart;
        chart.display();
