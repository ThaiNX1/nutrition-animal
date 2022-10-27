import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { UploadFile } from '../../common.model';
import { CommonService } from '../../common.service';
import { CdnService } from '../../../services';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {
  @Input() previewVisible: boolean = false;
  @Input() fileList: NzUploadFile[] = [];
  @Input() maxLengthUpload: number = 1;
  @Output() urlImage = new EventEmitter<string>();
  previewFile: UploadFile = { name: '', url: '' };
  previewImage = '';
  loading = false;

  constructor(private common: CommonService) {}

  ngOnInit(): void {}

  beforeUpload = (
    file: NzUploadFile,
    _fileList: NzUploadFile[]
  ): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.common.alertError('Chỉ upload ảnh định dạng JPEG/PNG');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.common.alertError('Chỉ upload ảnh dung lượng tối đa 2Mb');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handlePreview = async (file: UploadFile): Promise<void> => {
    this.previewFile = file;
    this.previewVisible = true;
  };

  uploadImage = (options: any): any => {
    this.loading = true;
    const { onSuccess, onError, file, onProgress } = options;
    CdnService.cdnControllerUploadFile({ files: file })
      .then((response) => {
        console.log('response', response);
      })
      .catch((err) => {
        return '';
      });
  };
}
