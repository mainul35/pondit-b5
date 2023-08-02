import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {HighlightService} from "../../../../services/HighlightService";
import {ArticleModel} from "../../model/article.model";

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit, AfterViewChecked {
  // javaCode ?: SafeHtml;
  javaCode ?: string;
  @Input() article ?: ArticleModel;
  constructor(private highlightService: HighlightService) {
    this.javaCode =
      `
      public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
      }
      `;

    // Use DomSanitizer to bypass Angular's template expression interpretation
    // this.javaCode = this.sanitizer.bypassSecurityTrustHtml(escapedJavaCode);

  }

  ngOnInit(): void {
    this.highlightService.highlightAll();
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

}
