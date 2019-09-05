import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Administrador } from 'src/models/administrador';

const url = environment.url + 'administrador/';
